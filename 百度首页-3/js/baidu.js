<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<link rel="stylesheet" href="./showdown.css"/>
		<link rel="stylesheet" href="./styles/github.css">
		<script type="text/javascript" src="./highlight.js"></script>
		<script type="text/javascript" src="./showdown.js"></script>
		<script type="text/javascript" src="./showdown-toc.js"></script>
	</head>

	<body>
		<textarea id="text-input" style="display:none"># StudyObject
# StudyObject
</textarea>
		<div id="preview" class="markdown-body"> </div>
		<script type="text/javascript">
			var $ = function (id) { return document.getElementById(id); };
			var converter = new showdown.Converter({ extensions: ['toc'], 'tasklists':true, 'tables':true});
			$("preview").innerHTML = converter.makeHtml($("text-input").value);
			hljs.initHighlighting();
		</script>
	</body>
</html>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            