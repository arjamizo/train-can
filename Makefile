train:
	rm -rf dist; volta --verbose run --node 18 npx parcel@2.7.0 build --dist-dir dist --no-optimize ./train-can.html
