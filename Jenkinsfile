pipeline {
  agent any
  stages {
    stage('build') {
      agent any
      steps {
        build 'build repo'
        ws(dir: '/srv/jenkins/gamer-drop-zone') {
          ws(dir: '/srv/jenkins/gamer-drop-zone') {
            git(url: 'git@github.com:mbround18/gamer-drop-zone.git', branch: 'master', changelog: true)
            sh '''cd /srv/jenkins/gamer-drop-zone
; 

ng build --prod --build-optimizer
'''
          }
          
        }
        
      }
    }
    stage('Test') {
      agent any
      steps {
        echo 'No test enables'
      }
    }
  }
}