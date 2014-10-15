Router.map(function() {

  this.route('home', {
    path: '/'
  });

  this.route('client', {
    path: '/client',
    template: 'hello',
    data: function () {
      // Just for showing we're at the client
      return { whereWeAt: 'client' };
    }
  });
  
  this.route('server', {
    path: '/server',
    where: 'server',
    action: function () {
      var html = SSR.render( 'hello', { whereWeAt: 'server' });
      this.response.writeHead(200, { "Content-type": "text/html" });
      this.response.end( html );
    }
  });

});