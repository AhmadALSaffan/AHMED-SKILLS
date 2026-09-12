param(
    [ValidateSet("global", "project")]
    [string]$Scope,

    [switch]$Force
)

$ErrorActionPreference = "Stop"

$repository = "AhmadALSaffan/AHMED-SKILLS"
$tempRoot = Join-Path ([System.IO.Path]::GetTempPath()) ("ahmed-skills-" + [Guid]::NewGuid().ToString("N"))
$sourcePath = Join-Path $tempRoot "AHMED-SKILLS"

function Read-Scope {
    while ($true) {
        $choice = Read-Host "Install for [1] all Claude Code projects or [2] current project only"

        switch ($choice) {
            "1" { return "global" }
            "2" { return "project" }
            default { Write-Host "Choose 1 or 2." -ForegroundColor Yellow }
        }
    }
}

function Copy-DirectoryContent {
    param(
        [string]$Source,
        [string]$Destination
    )

    if (-not (Test-Path $Source)) {
        Write-Host "Skipping missing source: $Source" -ForegroundColor Yellow
        return
    }

    New-Item -ItemType Directory -Path $Destination -Force | Out-Null
    Copy-Item -Path (Join-Path $Source "*") -Destination $Destination -Recurse -Force
}

if (-not $Scope) {
    $Scope = Read-Scope
}

if ($Scope -eq "project" -and -not (Test-Path (Join-Path (Get-Location) ".git"))) {
    Write-Host "Warning: the current directory is not a Git repository." -ForegroundColor Yellow
    $continue = Read-Host "Install into the current directory anyway? [y/N]"
    if ($continue -notmatch "^[Yy]$") {
        exit 0
    }
}

try {
    Write-Host "Downloading Ahmad Skills..." -ForegroundColor Cyan
    npx --yes degit $repository $sourcePath --force

    if ($LASTEXITCODE -ne 0) {
        throw "Download failed."
    }

    if ($Scope -eq "global") {
        $destinationRoot = Join-Path $HOME ".claude"
        $skillDestination = Join-Path $destinationRoot "skills\ahmed-skill"
        $sharedDestination = Join-Path $destinationRoot "ahmed-skills"

        if ((Test-Path $skillDestination -or Test-Path $sharedDestination) -and -not $Force) {
            $overwrite = Read-Host "Existing Ahmad Skills files were found. Replace them? [y/N]"
            if ($overwrite -notmatch "^[Yy]$") {
                Write-Host "Installation cancelled." -ForegroundColor Yellow
                exit 0
            }
        }

        if (Test-Path $skillDestination) { Remove-Item $skillDestination -Recurse -Force }
        if (Test-Path $sharedDestination) { Remove-Item $sharedDestination -Recurse -Force }

        Copy-DirectoryContent (Join-Path $sourcePath ".claude\skills\ahmed-skill") $skillDestination
        New-Item -ItemType Directory -Path $sharedDestination -Force | Out-Null
        Copy-DirectoryContent (Join-Path $sourcePath "rules") (Join-Path $sharedDestination "rules")
        Copy-DirectoryContent (Join-Path $sourcePath "skills") (Join-Path $sharedDestination "skills")
        Copy-DirectoryContent (Join-Path $sourcePath "templates") (Join-Path $sharedDestination "templates")
        Copy-Item (Join-Path $sourcePath "CLAUDE_GLOBAL_PROFILE.md") (Join-Path $sharedDestination "CLAUDE_GLOBAL_PROFILE.md") -Force
        Copy-Item (Join-Path $sourcePath "CLAUDE_PROJECT_TEMPLATE.md") (Join-Path $sharedDestination "CLAUDE_PROJECT_TEMPLATE.md") -Force

        Write-Host "Installed globally." -ForegroundColor Green
        Write-Host "Skill: $skillDestination"
        Write-Host "Shared rules and templates: $sharedDestination"
        Write-Host "Restart Claude Code, then use: /ahmed-skill init"
    }
    else {
        $projectRoot = (Get-Location).Path
        $claudeDestination = Join-Path $projectRoot ".claude"
        $skillDestination = Join-Path $claudeDestination "skills\ahmed-skill"
        $sharedDestination = Join-Path $claudeDestination "ahmed-skills"

        if ((Test-Path $skillDestination -or Test-Path $sharedDestination) -and -not $Force) {
            $overwrite = Read-Host "Existing Ahmad Skills files were found in this project. Replace them? [y/N]"
            if ($overwrite -notmatch "^[Yy]$") {
                Write-Host "Installation cancelled." -ForegroundColor Yellow
                exit 0
            }
        }

        if (Test-Path $skillDestination) { Remove-Item $skillDestination -Recurse -Force }
        if (Test-Path $sharedDestination) { Remove-Item $sharedDestination -Recurse -Force }

        Copy-DirectoryContent (Join-Path $sourcePath ".claude\skills\ahmed-skill") $skillDestination
        New-Item -ItemType Directory -Path $sharedDestination -Force | Out-Null
        Copy-DirectoryContent (Join-Path $sourcePath "rules") (Join-Path $sharedDestination "rules")
        Copy-DirectoryContent (Join-Path $sourcePath "skills") (Join-Path $sharedDestination "skills")
        Copy-DirectoryContent (Join-Path $sourcePath "templates") (Join-Path $sharedDestination "templates")
        Copy-Item (Join-Path $sourcePath "CLAUDE_GLOBAL_PROFILE.md") (Join-Path $sharedDestination "CLAUDE_GLOBAL_PROFILE.md") -Force
        Copy-Item (Join-Path $sourcePath "CLAUDE_PROJECT_TEMPLATE.md") (Join-Path $sharedDestination "CLAUDE_PROJECT_TEMPLATE.md") -Force

        Write-Host "Installed for the current project only." -ForegroundColor Green
        Write-Host "Skill: $skillDestination"
        Write-Host "Shared rules and templates: $sharedDestination"
        Write-Host "Restart Claude Code in this project, then use: /ahmed-skill init"
    }
}
finally {
    if (Test-Path $tempRoot) {
        Remove-Item $tempRoot -Recurse -Force
    }
}
