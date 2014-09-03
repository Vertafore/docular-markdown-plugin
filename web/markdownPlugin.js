angular.module('docular.plugin.markdown', [])
    .controller('docular.plugin.markdown.documentationController', ['$scope', 'markdown', function ($scope, markdownService) {
        $scope.content = markdownService($scope.documentationItem.content);
    }]);