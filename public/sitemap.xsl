<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="noindex"/>
        <title>Sitemap | DSR Civil Constructions</title>
        <style>
          body{font-family:Inter,Arial,sans-serif;margin:0;background:#f5f8ff;color:#001858}
          header{background:#001858;color:#fff;padding:28px 32px}
          header h1{margin:0 0 6px;font-size:24px}
          header p{margin:0;opacity:.8;font-size:14px}
          main{max-width:1000px;margin:28px auto;padding:0 16px}
          table{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 1px 4px rgba(0,24,88,.12)}
          th{background:#e3ecff;text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:.05em;padding:12px 14px}
          td{padding:12px 14px;border-top:1px solid #e3ecff;font-size:14px}
          a{color:#005fdd;text-decoration:none;word-break:break-all} a:hover{text-decoration:underline}
          @media(max-width:640px){.hide{display:none}}
        </style>
      </head>
      <body>
        <header>
          <h1>XML Sitemap</h1>
          <p><xsl:value-of select="count(s:urlset/s:url)"/> pages for dsrcivilconstructions.in</p>
        </header>
        <main>
          <table>
            <tr><th>#</th><th>Page URL</th><th>Last modified</th><th class="hide">Frequency</th><th class="hide">Priority</th></tr>
            <xsl:for-each select="s:urlset/s:url">
              <tr>
                <td><xsl:value-of select="position()"/></td>
                <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                <td><xsl:value-of select="s:lastmod"/></td>
                <td class="hide"><xsl:value-of select="s:changefreq"/></td>
                <td class="hide"><xsl:value-of select="s:priority"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
