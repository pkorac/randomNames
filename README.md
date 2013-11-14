# Random names generator
by Peter Koraca

## Example:
./randomNames.js -b car -l 3 -n 100 -p

## Flags:
-n 400			how many names to generate
-b something	the base (no spaces)
-p 				prepend the random characters or not
-l 				length of the generated string

## Piping:
You can pipe the output into a text file by doing this:
./randomNames -b car -l 3 -n 100 -p > names.txt


Have fun