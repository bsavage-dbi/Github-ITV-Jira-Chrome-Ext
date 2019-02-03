function insertTicketStatus(status) {
  var ticketStatus = `<div class="BtnGroup btn-group-merge">
  <div class="ticketstatus"> Status: ${status} </div></div>`
  $("#jiraTicketActions").after(ticketStatus)
}

function addTicketStatusCSS() {
  var css = `.ticketstatus {
    display: block;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    margin-left: 10px;
    padding: 10px;
    float: right;
    overflow: hidden;
    border: 2px solid #28a745;
    -webkit-border-radius: 8px;
    border-radius: 8px;
    font: normal 13px/1 "Lucida Console", Monaco, monospace;
    color: #28a745;
    text-align: center;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    background: rgba(1,153,217,0);
    -webkit-box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3);
    box-shadow: 1px 1px 1px 0 rgba(0,0,0,0.3);
    text-shadow: 1px 1px 1px rgba(0,0,0,0.2);
  }`

  $(`<style type='text/css'> ${css} </style>`).appendTo("head");
}

function jiraActionsBlockHTML() {
  return `<div id="JiraTicketBlock">
      <div class="branch-action">
      <span class="branch-action-icon" style="
    background-color: transparent !important;
">
    <svg width="32px" height="32px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
    <defs>
        <linearGradient x1="98.0308675%" y1="0.160599572%" x2="58.8877062%" y2="40.7655246%" id="linearGradient-1">
            <stop stop-color="#0052CC" offset="18%"></stop>
            <stop stop-color="#2684FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="100.665247%" y1="0.45503212%" x2="55.4018095%" y2="44.7269807%" id="linearGradient-2">
            <stop stop-color="#0052CC" offset="18%"></stop>
            <stop stop-color="#2684FF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g>
				<path d="M244.657778,0 L121.706667,0 C121.706667,14.7201046 127.554205,28.837312 137.962891,39.2459977 C148.371577,49.6546835 162.488784,55.5022222 177.208889,55.5022222 L199.857778,55.5022222 L199.857778,77.3688889 C199.877391,107.994155 224.699178,132.815943 255.324444,132.835556 L255.324444,10.6666667 C255.324444,4.77562934 250.548815,3.60722001e-16 244.657778,0 Z" fill="#2684FF"></path>
				<path d="M183.822222,61.2622222 L60.8711111,61.2622222 C60.8907238,91.8874888 85.7125112,116.709276 116.337778,116.728889 L138.986667,116.728889 L138.986667,138.666667 C139.025905,169.291923 163.863607,194.097803 194.488889,194.097778 L194.488889,71.9288889 C194.488889,66.0378516 189.71326,61.2622222 183.822222,61.2622222 Z" fill="url(#linearGradient-1)"></path>
				<path d="M122.951111,122.488889 L0,122.488889 C3.75391362e-15,153.14192 24.8491913,177.991111 55.5022222,177.991111 L78.2222222,177.991111 L78.2222222,199.857778 C78.241767,230.45532 103.020285,255.265647 133.617778,255.324444 L133.617778,133.155556 C133.617778,127.264518 128.842148,122.488889 122.951111,122.488889 Z" fill="url(#linearGradient-2)"></path>
		</g>
</svg>
  </span>
          <div class="branch-action-body">
              <div class="mergeability-details js-details-container Details">
                  <div class="merge-message">
                    <div id="jiraTicketActions" style="margin: 0px 10px 10px 10px;"><h3 class="h4 status-heading">Jira Ticket Actions</h3></div>
                  </div>
              </div>
          </div>
      </div>
  </div>`
}

function addJiraActionsBlock() {
  var html = jiraActionsBlockHTML()
  $('.timeline-comment-wrapper.timeline-new-comment.js-comment-container').before(html)
}

function addJiraActionsBlockToCreatePR() {
  var html = jiraActionsBlockHTML()
  $('.timeline-comment-wrapper.timeline-new-comment.composer > div.timeline-comment').after(html)
}