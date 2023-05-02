#give permission for everything in the express-app directory
sudo chmod -R 777 /home/embifi-website
#navigate into our working directory where we have all our github files
echo "************************** copying to /var/www/embifi.in/html"

sudo cp -r /home/embifi-website/build/* /var/www/embifi.in/html
echo "************************** copyied succesfully"
echo "************************** completed after_install done" 


