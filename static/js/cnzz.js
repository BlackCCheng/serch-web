var local_host = window.location.href

if (!local_host.includes('-test') && !local_host.includes('localhost:')) {
  var cnzz_protocol = "https:" == document.location.protocol ? " https://" : " http://";
  document.write(unescape("%3Cspan id='cnzz_stat_icon_1261947658'%3E%3C/span%3E%3Cscript src='https://s4.cnzz.com/z_stat.php%3Fid%3D1261947658' type='text/javascript'%3E%3C/script%3E")), document.getElementById(
    "cnzz_stat_icon_1261947658").style.display = "none"
}
