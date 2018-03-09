pipeline {
  agent any
  stages {
     stage('Checkout') {
         checkout scm
     }
     stage('Build') {
         docker.image('trion/ng-cli').inside {
             sh 'npm install'
             sh 'ng build --progress false --prod --aot --build-optimizer'
             sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'
         }
         archive 'dist.tar.gz'
     }
  }
}
