if (window.location.href.indexOf('linkedin') !== -1) {
  try {
    document.getElementById('header-invitations-count').style.display = 'none';
  }
  catch (err) {
    // We're either not on LinkedIn or there is no notification for removing
  }
}