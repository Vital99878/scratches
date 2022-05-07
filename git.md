# Resuerses

    https://git-scm.com/book/ru/v2/%D0%92%D0%B5%D1%82%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2-Git-%D0%A3%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B2%D0%B5%D1%82%D0%BA%D0%B0%D0%BC%D0%B8

# Git aliases

    https://git-scm.com/book/ru/v2/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D1%8B-Git-%D0%9F%D1%81%D0%B5%D0%B2%D0%B4%D0%BE%D0%BD%D0%B8%D0%BC%D1%8B-%D0%B2-Git
    git config --global --edit = open global git config file !
    git config --global alias.ci commit = git ci = git commit

# Git branch

     git branch -v = посмотреть последний коммит на каждой из веток
    

# Git config

    git config --global user.name <name>
    git config --global user.email <email>

# Git commit

git commit -m "<msg>" ( git reset --mixed HEAD = отменяет git add.)
git commit -a -m "<msg>" = git add . + git commit -m "" (Важно: не добавляет новые созданные файлы)
git commit --amend -m "<new msg>" = дополняет последний коммит

# git reflog

    git actions history

# git log --oneline -graph --decorate

    git log --author="<user>"

# git push

git push origin master = (origin = имя удаленного репо, master = name branch)
git push --set-upstream origin master
git log - commits historys
ашаifd

# git diff

git diff = difference between unstaged repo and last commit
git diff --staged = difference between staged repo and last commit
git diff commit-ID = difference between commit_id and last commit

# git checkout

git checkout HEAD = посмотреть commit из истории
git checkout <branch> = toggle to the <branch>
git reset --hard HEAD~1 = delete commit
git checkout <commit> -- <path to file>
git reset = отменяет git add .
git checkout <file> = Если не был сделан git add, то можно отменить измененияв <file> к последнему коммиту

# Проект с нуля!

echo "# project_Name" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/Vital99878/Project-3---Glozzom-Multi-Page-Theme.git
git push -u origin master

# git rebase -i

    git rebase -i <commit hash>
    https://www.youtube.com/watch?v=JI1_NQ44u-w&list=PLWkguCWKqN9N9mvHWFAXqSMStslkILiP0&index=16


