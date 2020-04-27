# #List of brnaches merged to dev
# for branch in `git branch -r --merged dev | grep -v HEAD`;
# do echo -e `git show --format="%ci %cr %cn" $branch origin/dev | head -n 1` \\t$branch; done | sort -r

# #Last commit on all branch
# git fetch --all --prune 
# for branch in `git branch -r | grep -v HEAD`;
# do echo -e `git show --format="%ai %ar %ae %an" $branch origin/master | head -n 1` \\t$branch; done | sort -r

# List of  All Branch , Committer Name and date
# for branch in `git branch -r | grep -v HEAD`;
# do echo -e `git show --pretty="%ai %ar %ae %an" $branch origin/dev | head -n 1` \\t$branch; done | sort -r

#find and delete all node_modules folder
find . -name node_modules -exec rm -rf {} \;

#delete all local branches deleted in remote
git fetch -p
git branch -vv | grep ': gone]'|  grep -v "\*" | awk '{ print $1; }' | xargs git branch -d

#delete remote branch
git push origin --delete feature/test-del

#List of Merged branches
# git branch -a --merged dev | grep -v dev |
#   xargs -I {} sh -c 'git log --ancestry-path --format=%H --merges {}..dev | tail -1'

# for k in `git branch -r | perl -pe 's/^..(.*?)( ->.*)?$/\1/'`; do echo -e `git show --pretty=format:"%Cgreen%ci %Cblue%cr%Creset" $k -- | head -n 1`\\t$k; done | sort -r

# for k in $(git branch -r $@ | sed 's/^..//; s/ .*//'); do echo "$(git log -1 --pretty='%Cgreen%ci %Cblue(%cr)%Creset ' $k) $k" ; done | sort -r;

# git for-each-ref --format='%(committerdate)%09%(authorname)%09%(refname)' | sort -k5n -k2M -k3n -k4n | grep remotes | awk -F "\t" '{ printf "%-32s %-27s %s\n", $1, $2, $3 }'

# git branch -r --merged origin/dev
# 
# 
# git branch -r --merged dev | grep -v dev | sed 's/origin\///' | xargs -n 1 | sort -r

# get PR in a repo
git ls-remote origin 'pull/*/head' | awk '{print $2}' |
while read ref; do
  pr=$(echo $ref | cut -d/ -f3)
  git fetch origin $ref > /dev/null
  files_changed=$(git show --pretty=format:'' --name-only FETCH_HEAD|wc -l)
  echo "PR number $pr has changes in $files_changed files"
done



# List all branches whhich have not received any commits since a date
for k in $(git branch -r | sed /\*/d); do 
  if [ -z "$(git log -1 --since='Jan 01, 2020' -s $k)" ]; then
    branch_name_with_no_origin=$(echo $k | sed -e "s/origin\///")
    echo branch-Name: $branch_name_with_no_origin
  fi
done