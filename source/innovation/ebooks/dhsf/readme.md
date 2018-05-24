# Conversion script instructions

These are based on [Rachel Andrew's kit](https://github.com/rachelandrew/css-books). 

These commands assume the tools are installed, that it's using Seldon Middleman, and the commands are issued just above the target directory. 

## eBook via Pandoc
```
pandoc -o dhsf/dhsf.epub dhsf/index.html --epub-metadata=dhsf/metadata.xml --toc --toc-depth=2 --epub-cover-image=dhsf/dhsf-ebook-cover-2x.png --css=../../public/css/print/ebook.css
```

## PDF via Prince
```
prince -s ../../public/css/print/ebook.css dhsf/toc.html dhsf/index.html builds/dhsf.pdf
prince dhsf/toc.html dhsf/index.html dhsf/dhsf.pdf
```

