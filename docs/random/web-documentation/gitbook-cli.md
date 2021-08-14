# Gitbook Cli

## How to install Gitbook Legacy

To install the command line interface:

> - Install Nodejs (with NPM)
> - `npm install gitbook-cli -g`
> - `npm install gitbook-pdf -g`


To verify installation:
> - `gitbook -V`

## Install LaTex Support
[Reference](https://github.com/GitbookIO/plugin-mathjax)

For KaTex
``` json
{
    "plugins": ["katex"]
}
```

For MathJax
``` json
{
    "plugins": ["mathjax"]
}
```
- `gitbook install`


## Publish Static Pages to GitHub
To avoid troublesome branch switching and files copying, simply use a public npm package [gh-pages](https://github.com/tschaub/gh-pages). To setup:
``` bash
sudo npm install -g gh-pages # to install globally
echo "require('gh-pages').publish('_book', function(err) {});" > publish.js # to create script file for node
```

To update the static site, simply do (it will not commit the master for you):
``` bash
node publish
```


***Previous Non-Working Insturctions***

- Another npm package tried [gitbook-publish](https://github.com/akshatamohanty/gitbook-publish) to update `gh-pages` branch in GitHub. _The problem is the script does not switch back to master branch after running._ To update the static site, simply do:
``` bash
gitpub
```

- Try to use **worktree** to resolve the problem, refer to this [gist](https://gist.github.com/cobyism/4730490#gistcomment-2337463) 
    ``` bash
    git worktree add -b gh-pages ../gh-pages origin/gh-pages
    ```
- Try to use **subtree** to resolve the problem [gist](https://gist.github.com/cobyism/4730490)
    ``` bash
    gitbook build # build html to _book directory
    git add . # add all changes to commit on master branch

    git subtree push --prefix _book origin gh-pages # put _book into a subtree on gh-pages branch
    ```

Tip: to remove ignored files that are previously tracked
``` bash
git rm -r --cached _book
```