# Conversion script instructions

These are based on [Rachel Andrew's kit](https://github.com/rachelandrew/css-books). 

The main efforts require a custom view (in this case, the DHSF as a stripped-down .slim template), and newly-added print and pdf styles. These can be loaded individually (for straight-up printing) or used as the combined `ebook.css` file which includes custom PDF-oriented styles.

These commands assume the tools are installed, that it's using Seldon Middleman, and the commands are issued just above the target directory. Seldon must be compiled first with `bundle exec middleman build`; navigate to the `/build/innovation/ebooks/*` directory to use the tools below.

## eBook via Pandoc

This example is issued within the target directory.

```
pandoc -o dhsf.epub index.html --epub-metadata=metadata.xml --toc --toc-depth=2 --epub-cover-image=dhsf-ebook-cover-2x.png --css=../../../public/css/print/ebook.css
```

## PDF via Prince

This one is done from the dir above. 

```
prince -s ../../public/css/print/ebook.css dhsf/toc.html dhsf/index.html builds/dhsf.pdf
prince dhsf/toc.html dhsf/index.html dhsf/dhsf.pdf
```

In the latter case, I manually tacked on a custom PDF introduction page for aesthetics.
