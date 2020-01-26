# Class #3 (Monday, 9/9)

#### In-Class

* Slides [link](https://docs.google.com/presentation/d/1tfOhjVd-BdCzzZckk2VyGB3ziTJt1VGZVWdpl8ZUBt8/edit?usp=sharing) or pdf in this repo.

* Day 1 homework presentations

* Intro to UNIX/command line

* The Brew app manager - [brew.sh](https://brew.sh/)

* Working with Git / GitHub

* SSH Keys

### Homework

Go through the process of creating a repo for your first assignment. Set it up to be hosted and viewable via Github Pages (`http://yourUserName.github.io/YourAssignmentRepo/`)

[Email](mailto:effie.vision@gmail.com) me the link to that repo.

When working in Terminal:

* **Remember:** `rm -rf` will delete files without confirming, so be careful that you are targeting the right files to delete.

* To explore more Terminal commands, search the internet for a "Terminal cheatsheet"

* Use `man <command>` to view the manual of any given command directly in Terminal.

* One fun one: [Play the Terminus Game](http://web.mit.edu/mprat/Public/web/Terminus/Web/main.html)

* **Note:** If you run into issues on a Windows computer, please contact me– I don't have access to a Windows machine but can help direct you to resources on GitBASH.

When working with Git:

* **Remember our general work flow for saving and pushing your work back to github**

```
git status
git add .
git commit -m "I am saving my work. This is my commit message."
git status
git push origin master
```

You can check `status` any time, and it is not **necessary** but becomes a very good habit to maintain, as the complexity of your projects increase.

---

### Post Class Communique

Hi Folks!

Please check our updated class repo for today at https://github.com/effieVision/DM-UY-2193-A/tree/master/03_sep9_day3

There is one extra step to getting your computer able to push commits to GitHub, for those of you who haven't set this up before:

### YOUR SSH KEY

SEE: https://help.github.com/en/articles/connecting-to-github-with-ssh

In order to upload files to your GitHub repo, you need to have set up an "SSH key" for the laptop you are working on.

This authenticates your connection to the server.

- Generate an SSH key with
`ssh-keygen -t rsa -b 4096 -C "yourEmailHere@theOneYouUsedForGithub.com"`

You will receive prompts to rename, add passwords, etc... as part of the keygen process. **Don't add any inputs to those prompts–** just hit enter to use the default (correct) inputs.

See: https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key

This key file, on a Mac, is stored in the hidden folder `~/.ssh/`.

**Please see https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account for Windows instructions.**

- Navigate to the location of the file using Terminal with `cd ~/.ssh/`

- Copy the contents of `id_rsa.pub` either by writing `cat id_rsa.pub` and copying the output, or send it directly to your clipboard with `cat id_rsa.pub | pbcopy`.

- Go to the "SSH and GPG Keys" section of your Github account via https://github.com/settings/keys

- Click "New SSH Key", add a title (This is just for you to identify what computer the Key belongs to, ex: "Personal Laptop 2019")

- Paste the public key and hit Save.

If you run into any issues **please [email](mailto:effie.vision@gmail.com) me**

Peace! ✌️
