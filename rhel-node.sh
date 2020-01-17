if hash yum 2>/dev/null; then
  mgr=yum;
fi

if hash dnf 2>/dev/null; then
  mgr=dnf;
fi

wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.2/install.sh | bash
source ~/.bashrc
nvm install 12
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | tee /etc/yum.repos.d/yarn.repo
$mgr install -y yarn
unset mgr
clear
