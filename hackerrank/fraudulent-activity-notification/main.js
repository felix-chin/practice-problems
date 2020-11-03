// time:
// space:
function activityNotifications(expenditure, d) {
  let notifications = 0;
  const counts = [];
  const sorted = [];
  let queue = expenditure.slice(0, d);
  for (let i = 0; i < expenditure.length; i++) {
    counts[expenditure[i]] !== undefined ? counts[expenditure[i]]++ : counts[expenditure[i]] = 1;
  }
  for (let i = 1; i < counts.length; i++) {
    counts[i] += counts[i - 1];
  }
  for (let i = d; i < expenditure.length; i++) {

    let median;
    if (d % 2 === 0) {
      median = (spending[d / 2 - 1] + spending[d / 2]) / 2;
    } else {
      median = spending[Math.ceil(d / 2) - 1]
    }
    if (expenditure[i] >= median * 2) {
      notifications++;
    }
  }
  return notifications;
}
