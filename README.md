# PreTeXt Documents for MATH-UA 122 Calculus II (Coordinated), Spring 2026

Pretty much what it says on the tin.

## Components

* The syllabus
* Problem sets, one for each week
* Worksheets, one for each section

## Instructions

Build the entire course with:

```bash
pretext build --deploys
```

and then view it with 

```bash
pretext deploy --stage-only
pretext view -d
```

If you want to build just a single activity, say the "Magic Beans" activity, run:

```bash
pretext build  pdf -i ./source/activities/magic-beans.ptx
```

This will create a pdf inside the `output/pdfs` directory.

Another thing to try:

```bash
pretext build scorm -i ./source/activities/magic-beans.ptx
```


### How this is done

Look at the source files, in particular `source/activities.ptx` and `source/activities/magic-beans.ptx` to see how the activities are included in the main document and can also build on their own.

Each `worksheet` element in a worksheet `.ptx` file needs an `xml:id` to be pointed to by `activities.ptx`.
It doesn't have to be unique to build `activities-web`, but it probably should be. I'm adopting the convention `ws-<code>`, 
where `code` is a short slug for the topic. 

You can also point to the worksheet element by a numerical path such as `/1/1/1`. But that's not stable; if you
add elements to the higher levels, the child-index of the `pretext/article/worksheet` element will change. 

It also seems you can use an xpath expression like `xpointer(//worksheet[1])`.


---

Below you will find some advice for working with PreTeXt, including help with using the [PreTeXt Codespace](https://github.com/PreTeXtBook/pretext-codespace) online editor through GitHub if you don't want to install the required software on your own computer.

## Learning PreTeXt

See the [PreTeXt documentation](https://pretextbook.org/documentation.html) for links to a variety of resources.

We also recommend browsing through the [annotated sample article](https://pretextbook.org/examples/sample-article/annotated) and [annotated sample book](https://pretextbook.org/examples/sample-book/annotated/) if you want to find examples and see the PreTeXt source for those examples quickly.

## Using GitHub Codespaces

GitHub Codespaces are a way to set up your whole authoring system entirely in your browser.  In case you are not already reading this inside a codespace, you can create one specifically designed for authoring in PreTeXt by using [this template](https://github.com/PreTeXtBook/pretext-codespace).

### Important: how to save your files

The most important thing to remember when authoring in a codespace is that you are making all your edits on a *virtual machine* off in some remote server farm.  This means there is an extra step to save your files.  You can save files in the editor (in your browser), but this just saves them to that virtual machine.  To make sure you can access these files, even if the virtual machine goes away, you need to sync them to github.com.  This is done by *committing* your changes and then *pushing* those commits (or "syncing" them).  You might see a warning when you restart your codespace that you have "uncommitted changes" -- make sure you commit them when you are done working.

### Troubleshooting: Latex-images and pdfs

We have tried to keep the codespace small (so it starts up quickly and doesn't eat through your monthly storage allotment), so we do not include a full TeXLive distribution.  We have tried to include most packages and fonts you are likely to need to generate images using `<latex-image>` elements, and to generate PDF print output.  However, if you run into a situation where the LaTeX gives errors about packages missing (like it cannot find a `mypackage.sty` file), here is what you should do.

1. To quickly resolve the issue yourself, open a terminal (``Ctrl+Shift+` ``) and use the TeXLive Package Manager to install the missing package.  
    a. If you know that the package is called `mypackage` then enter the following two lines:

    ```bash
    tlmgr install mypackage
    tlmgr path add
    ```
    b. If you don't know the name of the package, but know it should contain `mypackage.sty`, then you can search using

    ```bash
    tlmgr search --global --all "mypackage.sty"
    ```

2. To ensure that you don't have to repeat this step every time you recreate the codespace, add the package name to the list of installs inside the file `.devcontainer/installLatex.sh` which gets run every time a codespace is created.

3. Better yet, post the name of the missing package to this [GitHub issue](https://github.com/PreTeXtBook/pretext-codespace/issues/21) and we will add it to the devcontainer.  This has the advantage that you will still get updates that other authors submit (if you edit the `installLatex.sh` file, then it won't be updated when you run `pretext update`).

### Troubleshooting: sageplot images

By far the largest space-hog in a PreTeXt authoring environment is SageMath, which is only required if you generate images using sageplots.  By default, SageMath is not installed in a PreTeXt codespace, but it should be easy to install if you need it.  

Just open the command palette (`Ctrl+Shift+P` of `F1`) and search for "PreTeXt: Install SageMath".  This will also update the `.devcontainer/devcontainer.json` file so that the next time you create a codespace for this project, it should install automatically.
