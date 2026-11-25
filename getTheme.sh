#!/usr/bin/env bash
set -euo pipefail

REPO="quinix45/Fabio_Theme"
BRANCH="main"
TOPDIR="${REPO##*/}-${BRANCH}"

curl -fsSL "https://codeload.github.com/${REPO}/tar.gz/refs/heads/${BRANCH}" \
  | tar -xz --strip-components=2 -C . "${TOPDIR}/presentationSkeleton"

# Git archives omit empty directories, so recreate the skeleton's empty folders.
mkdir -p additionalFiles/images additionalFiles/scripts

echo "Presentation skeleton downloaded into $(pwd)"