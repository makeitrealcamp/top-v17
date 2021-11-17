const timeNow = date => {
    return[
      date.getFullYear(), '-',
      date.getMonth() + 1, '-',
      date.getDate(), ' ',
      date.getHours(), ':',
      date.getMinutes()
    ].reduce((before, current, count) => 
      before + (count % 2 || ('' + current).length === 2 ? '' : '0') + current
    )
  }
  
  require('net').createServer(socket =>{
    socket.end(timeNow(new Date()) + '\n')
  }).listen(process.argv[2] | 0);
  