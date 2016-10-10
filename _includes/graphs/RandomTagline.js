# We need to modify this line:
# "<meta name="description" content="Yer a signal, Harry!">"
# It's around line 14 in the page source (view-source feature in browser).

# ______---TEST---______
# PROBABLY DOESN'T WORK!

document.getElementById("description").setAttribute("content",
"dynamic meta description");
