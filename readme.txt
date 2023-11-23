https://reactnative.dev/docs/running-on-device

activer dev mode
debogage usb

puis
npx react-native run-android
adb devices (check)
adb -s   reverse tcp:8081 tcp:8081
device-name e916d0ae

[Deprecated Gradle features were used in this build, making it incompatible with Gradle X.0]
https://deksmond.medium.com/deprecated-gradle-features-were-used-in-this-build-making-it-incompatible-with-gradle-8-0-cdbe9f2fa628
Pourtant gradle 7.5.1 est mentionné

Essayer de configurer gradle pour react nativehttps://reactnative.dev/docs/react-native-gradle-plugin


 ./gradlew build --warning-mode=all

adb kill-server

 Errors
 > Configure project :react-native-sqlite-storage      
The RepositoryHandler.jcenter() method has been deprecated. This is scheduled to be removed in Gradle 8.0. JFrog announced JCenter's sunset in February 2021. Use mavenCentral() instead. Consult the upgrading guide for further information: https://docs.gradle.org/7.5.1/userguide/upgrading_version_6.html#jcenter_deprecation 
        at build_csznz5ks1qxgzfpts53fnyjnp$_run_closure1$_closure2.doCall(C:\Users\elian\Desktop\Bao\Bao\TSARALAZA\apps\mobile\drills\node_modules\react-native-sqlite-storage\platforms\android-native\build.gradle:4) 
        (Run with --stacktrace to get the full stack trace of this deprecation warning.)  

>>Kotlin gradle plugin loaded Multiple time
The Kotlin Gradle plugin was loaded multiple times in different subprojects, which is not supported and may break the build.  
This might happen in subprojects that apply the Kotlin plugins with the Gradle 'plugins { ... }' DSL if they specify explicit versions, even if the versions are equal.
Please add the 

The Kotlin Gradle plugin was loaded multiple times in different subprojects, which is not supported and may break the build.
This might happen in subprojects that apply the Kotlin plugins with the Gradle 'plugins { ... }' DSL if they specify explicit versions, even if the versions are equal.
Please add the Kotlin plugin to the common parent project or the root project, then remove the versions in the subprojects.
If the parent project does not need the plugin, add 'apply false' to the plugin line.
See: https://docs.gradle.org/current/userguide/plugins.html#sec:subprojects_plugins_dsl
The Kotlin plugin was loaded in the following projects: ':expo', ':expo-modules-core'

>see -- >The Kotlin plugin was loaded in the following projects: ':expo', ':expo-modules-core'

Solution 1 : ajout de => implementation(platform("org.jetbrains.kotlin:kotlin-bom:1.8.0")) dans app/build.gradle
dans dependency ... Pas de changement