VERSION=8.7

wget https://services.gradle.org/distributions/gradle-${VERSION}-bin.zip -P /tmp
sudo mkdir -p /opt/gradle
sudo unzip -d /opt/gradle /tmp/gradle-${VERSION}-bin.zip
sudo ln -sfn /opt/gradle/gradle-${VERSION} /opt/gradle/latest

echo 'export PATH=/opt/gradle/latest/bin:$PATH' | sudo tee /etc/profile.d/gradle.sh
source /etc/profile.d/gradle.sh

gradle -v

# if any issues uncomment the following line
# ls -l /opt/gradle/
# ls -l /opt/gradle/latest/bin/
# export PATH=/opt/gradle/latest/bin:$PATH
