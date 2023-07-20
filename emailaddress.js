function generateEmailAddress(name, company, emailFreq) {
    const parts = name.trim().split(' ');
    const firstName = parts[0];
    const middleName = parts.length > 2 ? parts[1][0] : '';
    const lastName = parts[parts.length - 1].replace(/[-']/g, '').slice(0, 8);
    let email = `${firstName[0]}${middleName}${lastName}@${company.toLowerCase()}.com`;
  
    if (emailFreq[email]) {
      let freq = emailFreq[email];
      emailFreq[email] = freq + 1;
      email = `${firstName[0]}${middleName}${lastName}${emailFreq[email]}@${company.toLowerCase()}.com`;
    } else {
      emailFreq[email] = 1;
    }
  
    return email;
  }
  
  function emailgen(str, com) {
    const names = str.split(', ');
    const emailDict = {};
    const emailFreq = {};
  
    for (let name of names) {
      let email = generateEmailAddress(name, com, emailFreq);
      emailDict[name] = email;
    }
  
    const formattedEmails = Object.entries(emailDict).map(([name, email]) => `${name.trim()} <${email}>`);
    return formattedEmails.join(', ');
  }
  
  const comp = "Bxample";
  const emp = "John Bee, Peter Parter, pparkerders, Mary Jane Watson-Parker, James Doe, Jane Doe, Penny Parker, Jack Doe";
  console.log(emailgen(emp, comp));
  