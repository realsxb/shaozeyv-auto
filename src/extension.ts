// // The module 'vscode' contains the VS Code extensibility API
// // Import the module and reference it with the alias vscode in your code below
// import * as vscode from 'vscode';

// // This method is called when your extension is activated
// // Your extension is activated the very first time the command is executed
// export function activate(context: vscode.ExtensionContext) {

// 	// Use the console to output diagnostic information (console.log) and errors (console.error)
// 	// This line of code will only be executed once when your extension is activated
// 	console.log('Congratulations, your extension "shaozeyv-auto" is now active!');

// 	// The command has been defined in the package.json file
// 	// Now provide the implementation of the command with registerCommand
// 	// The commandId parameter must match the command field in package.json
// 	let disposable = vscode.commands.registerCommand('shaozeyv-auto.helloWorld', () => {
// 		// The code you place here will be executed every time your command is executed
// 		// Display a message box to the user
// 		vscode.window.showInformationMessage('Hello World from asdc!');
// 	});

// 	context.subscriptions.push(disposable);
// }

// // This method is called when your extension is deactivated
// export function deactivate() {}
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // 命令1: 启动C语言调试配置
    let disposableC = vscode.commands.registerCommand('extension.startCDebug', () => {
        vscode.debug.startDebugging(vscode.workspace.workspaceFolders?.[0], 'C Debug');
    });

    // 命令2: 启动C++语言调试配置
    let disposableCpp = vscode.commands.registerCommand('extension.startCppDebug', () => {
        vscode.debug.startDebugging(vscode.workspace.workspaceFolders?.[0], 'C++ Debug');
    });

    context.subscriptions.push(disposableC, disposableCpp);
}

export function deactivate() {}
