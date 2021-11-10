const url = window.location.href;
let videoId = url.substr(url.lastIndexOf("/") + 1);

const player = `<video controls>
                    <source src="/${videoId}" >
                    Your browser does not support the video tag.
                </video>`;

$("#player").append(player);



