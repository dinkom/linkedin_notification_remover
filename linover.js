if (window.location.href.indexOf('linkedin') !== -1) {
  try {
    document.getElementById('header-invitations-count').style.display = 'none';
  }
  catch (err) {
    // There's nothing to remove
  }
}