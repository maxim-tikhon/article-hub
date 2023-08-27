import { Project } from 'ts-morph';
var project = new Project({});
project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');
var files = project.getSourceFiles();
function isAbsolute(value) {
    var layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages'];
    return layers.some(function (layer) { return value.startsWith(layer); });
}
files.forEach(function (sourceFile) {
    var importDeclarations = sourceFile.getImportDeclarations();
    importDeclarations.forEach(function (importDeclaration) {
        var value = importDeclaration.getModuleSpecifierValue();
        if (isAbsolute(value)) {
            importDeclaration.setModuleSpecifier("@/".concat(value));
        }
    });
});
project.save();
