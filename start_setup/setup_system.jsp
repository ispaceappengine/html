<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet"
	href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
<script
	src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
<link rel="stylesheet" href="css/css.css">
<script src="js/js.js"></script>
<meta>
<title>Start</title>
</head>
<body>
	<h1>Start a project</h1>

	<ol><li>Dynamic Web Project erstellen</>
		<li>Ordnerstruktur erstellen mit WebContent/css/c_css.css und
			WebContent/js/c_js.js</li>
		<li>In WebContent index.jsp erstellen und mit nachfolgendem Inhalt ersetzen 
		<pre>
	<code>
&lt;%@ page language=&quot;java&quot; contentType=&quot;text/html; charset=UTF-8&quot; pageEncoding=&quot;UTF-8&quot;%&gt;
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;meta http-equiv=&quot;Content-Type&quot; content=&quot;text/html; charset=UTF-8&quot;&gt;
&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot;&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css&quot;&gt;
&lt;script src=&quot;https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js&quot;&gt;&lt;/script&gt;
&lt;script src=&quot;http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js&quot;&gt;&lt;/script&gt;
&lt;link rel=&quot;stylesheet&quot; href=&quot;css/c_css.css&quot;&gt;
&lt;script src=&quot;c_js/js.js&quot;&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
		test
&lt;/body&gt;
&lt;/html&gt;
	
				</code>
</pre>
		</li>
		<li>Auf UTF-8 in Windows->Preferences->Web-> Alles auf UTF-8 umstellen</li>
		<li>File Associations hinzufügen: <a href="http://stackoverflow.com/questions/7900575/how-to-add-css-autocomplete-to-eclipse">http://stackoverflow.com/questions/7900575/how-to-add-css-autocomplete-to-eclipse</a>
		<li>Weitere Einstellung: <a	href="http://stackoverflow.com/questions/12269560/javascript-editor-plugin-for-eclipse">http://stackoverflow.com/questions/12269560/javascript-editor-plugin-for-eclipse</a>
		<li>JBoss Tools editor für bootstrap content assist:<br> 
			* http://tools.jboss.org/downloads/jbosstools/mars/4.3.0.Final.html
			* http://stackoverflow.com/questions/33293627/jboss-tools-for-jsp-make-content-assist-work-for-bootstrap-class-as-in-html-e <br>
			
		 </li>
		<li>Einstellungen in Eclipse vornehmen
			<ol>
			<li>
				Aptana plugin: <a href="http://www.aptana.com/products/studio3/success_plugin.html">http://www.aptana.com/products/studio3/success_plugin.html</a>	
			</li>			
				<li>
					<p>
						jQuery Autocompletion with Eclipse Juno Java EE: <a
							href="http://stackoverflow.com/questions/11731884/jquery-autocompletion-with-eclipse-juno-java-ee">http://stackoverflow.com/questions/11731884/jquery-autocompletion-with-eclipse-juno-java-ee</a>
						<br> JSDT Query plugin installieren und dann jQuery lib über
						projekt properties zum JavaScript include path hinzufügen
					</p>
				</li>
				<li>
					<p>
						Enabling bootstrap content assist in eclipse: <a
							href="http://java.jasks.org/enabling_bootstrap_content_assist_in_eclipse">http://java.jasks.org/enabling_bootstrap_content_assist_in_eclipse</a>
						Tern aus dem Marketplace runter laden<br> Rechtsklick auf das
						Projekt-> Configure -> convert to Tern project<br> dannach
						hat man jQuery autocompletion in .css files.
					</p>
				</li>
			</ol>
		</li>

	</ol>

</body>
</html>
