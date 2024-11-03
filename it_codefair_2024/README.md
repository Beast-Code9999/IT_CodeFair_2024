# Errors

1. No +[RCTConvert WKDataDetectorTypes:] function found - dataDetectorTypes prop problem

   ### Solution: 
   - Go to node_modules\react-native-pell-rich-editor\src\RichEditor.js
   - Delete the line dataDetectorTypes={'none'} (maybe in line 270)
   - run ```bash
      npm i patch-package
      ```
   - Go to package.json and add:
      ```bash
      "scripts": {
         "postinstall": "patch-package"
      }
      ```
   - Then run 
      ```bash
      npx patch-package react-native-pell-rich-editor
      ```
   You will see the folder named 'patches'

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```
   - [Upgrade dependencies](https://docs.expo.dev/workflow/upgrading-expo-sdk-walkthrough/#how-to-upgrade-to-the-latest-sdk-version)

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

1. How to check Expo SDK version (link)[https://www.reddit.com/r/expo/comments/yxrqe1/how_to_check_expo_sdk_version/]

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
