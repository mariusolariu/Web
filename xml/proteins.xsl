<?xml version = "1.0"?>

<xsl:stylesheet version = "1.0"
	xmlns:xsl = "http://www.w3.org/1999/XSL/Transform">

	<xsl:output method = "html" doctype-system = "about:legacy-compat"/>
	<xsl:template match = "/"> 


	<html>
		<head>
			<meta charset = "utf-8"/>
			<title> Web Development </title>
		</head>


		<body>
			<table>
				<caption> Info about a mars bar </caption>
				<thead>
					<tr>
						<th>Mars Bar </th>
					</tr>
				</thead>

				<xsl:for-each select = "/marsBar">
							<tr> <xsl:value-of select = "energy"/> </tr>
							<tr> <xsl:value-of select = "carbohydrates"/> </tr>
							<tr> <xsl:value-of select = "protein"/> </tr>

				</xsl:for-each>

			</table>
		</body>

	</html>

	</xsl:template>
</xsl:stylesheet>
