#/bin/sh

echo "Make sure you use sudo before running this script"

git pull
npm run build
pm2 kill
pm2 serve build/ 8080 --spa
systemctl restart nginx
