#!groovy



properties(

    [

        [$class: 'BuildDiscarderProperty', strategy:

          [$class: 'LogRotator', artifactDaysToKeepStr: '14', artifactNumToKeepStr: '5', daysToKeepStr: '30', numToKeepStr: '60']],

        pipelineTriggers(

          [

              // pollSCM('H/15 * * * *'),

              // cron('@daily'),

          ]

        )

    ]

)

node {



    stage('Checkout') {

        //disable to recycle workspace data to save time/bandwidth

        deleteDir()

        checkout scm

    }



    //docker.image('trion/ng-cli-karma:1.2.1').inside {

      stage('NPM Install') {

          withEnv(["NPM_CONFIG_LOGLEVEL=warn"]) {

              sh 'npm install'
              sh 'npm install --save @types/jquery@2.0.34'
          }

      }



      stage('Test') {

          //withEnv(["CHROME_BIN=/usr/bin/chromium-browser"]) {

            //sh 'ng test --progress=false --watch false'

          //}

        try {
            sh 'ng test --progress=false --watch false'
            junit '**/test-results.xml'
        } catch(Exception ex) {
            println "Exception: ${ex.message}"
        }

      }
  

      stage('Build') {

          milestone()

        // test reading results
          def exists = fileExists '**/Chrome_62.0.3202_(Windows_10_0.0.0)/test-results.xml'

          if(exists){
               println("test-results.xml FOUND")

               try{
                  def _readfile = readFile '**/test-results.xml'
                  def test=new XmlSlurper().parse(new File('**/test-results.xml'))
                  println(test.name())
                  println test.attributes()


 
               }catch(Exception ex) {
                  println "Exception reading file: ${ex.message}"
               }
          }
          else{
               println("test-results.xml NOT FOUND")
          }

          //sh 'ng build --prod --aot --sm --progress=false'
          sh 'ng build --env=prod --output-hashing none' 

      }

    //}

    //end docker



    stage('Archive') {

        sh 'tar -cvzf dist.tar.gz --strip-components=1 dist'

        archive 'dist.tar.gz'

    }



    stage('Deploy') {

        milestone()

        echo "Deploying..."

    }

}