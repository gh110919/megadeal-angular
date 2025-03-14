#!/bin/bash

bun run ng build --base-href "https://gh110919.github.io/megadeal-angular/"
gh-pages -d "$(pwd)/dist/angular/browser/"
