#!/usr/bin/env bash
set -euo pipefail

REPO="quinix45/Fabio_Theme"
BRANCH="main"
TOPDIR="${REPO##*/}-${BRANCH}"

curl -fsSL "https://codeload.github.com/${REPO}/tar.gz/refs/heads/${BRANCH}" \
  | tar -xz --strip-components=2 -C . "${TOPDIR}/presentationSkeleton"

echo "Presentation skeleton downloaded into $(pwd)"