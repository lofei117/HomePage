// Constructor
InteractionApp = function()
{
  Sim.App.call(this);
}

// Subclass Sim.App
InteractionApp.prototype = new Sim.App();

// Our custom initializer
InteractionApp.prototype.init = function(param)
{
  // Call superclass init code to set up scene, renderer, default camera
  Sim.App.prototype.init.call(this, param);

    // Create a directional light to show off the Control
  var light = new THREE.DirectionalLight( 0xffffff, 0.5);
  light.position.set(10, 0, 0);
  this.scene.add(light);

  light = new THREE.DirectionalLight( 0xffffff, 0.5);
  light.position.set(0, 10, 0);
  this.scene.add(light);

  light = new THREE.DirectionalLight( 0xffffff, 0.5);
  light.position.set(0, 0, 10);
  this.scene.add(light);

  this.camera.position.set(0, 1, 8);
  this.camera.lookAt(this.root);

  this.controls = [];

  var outer_this = this;

  $('#container a').each(function(index, element) {
    id = element['id'];
    icon = element['innerHTML'];
    title = element['title'];
    url = element['href'];
    var control = new Control();
    control.init({ 'id' : id, 'icon' : icon,  'url' : url, 'title' : title});
    outer_this.addObject(control);
    outer_this.controls.push(control);
  });

  this.layoutControls();
}

InteractionApp.prototype.layoutControls = function()
{
  var scale = 3;
  var theta = 0;
  var x = scale * Math.sin(theta);
  var z = scale * Math.cos(theta);
  var y = 0;

  var nControls = this.controls.length;
  var left = (nControls - 1 )/ 2 * -scale;

  var i;

  x = left;
  y = z = 0;
  for (i = 0; i < nControls; i++)
  {
    this.controls[i].setPosition(x, y, z);
    x += scale;
  }
}

InteractionApp.prototype.update = function()
{
  var nControls = this.controls.length;
  for (i = 0; i < nControls; i++)
  {
    this.controls[i].rotateControl();
  }

  Sim.App.prototype.update.call(this);
}

// Custom Control class
Control = function()
{
  Sim.Object.call(this);
}

Control.prototype = new Sim.Object();

Control.prototype.init = function(param)
{
  this.id = param.id || '';

  this.url = param.url || '';

  var icon = param.icon || '';
  var map = THREE.ImageUtils.loadTexture(icon);

  var material = new THREE.MeshPhongMaterial({ map: map });

  // Create the cube geometry
  var geometry = new THREE.CubeGeometry(1, 1, 1);

  // And put the geometry and material together into a mesh
  mesh = new THREE.Mesh(geometry, material);

  // Turn it toward the scene, or we won't see the cube shape!
  mesh.rotation.x = Math.PI / 5;
  mesh.rotation.y = Math.PI / 5;
  this.NORMAL_ROTATION_RATE = 0.01;
  this.ACTIVE_ROTATION_RATE = 0.03;
  this.rotation_rate = this.NORMAL_ROTATION_RATE;

  mesh.doubleSided = true;

  // Tell the framework about our object
  this.setObject3D(mesh);
  this.mesh = mesh;

  this.selected = false;

  // Have the framework show the pointer when over
  this.overCursor = 'pointer';
}

Control.prototype.handleMouseOver = function(x, y)
{
  this.rotation_rate = this.ACTIVE_ROTATION_RATE;
}

Control.prototype.handleMouseOut = function(x, y)
{
  this.rotation_rate = this.NORMAL_ROTATION_RATE;
}

Control.prototype.rotateControl = function()
{
  this.mesh.rotation.x -= this.rotation_rate;
  this.mesh.rotation.y -= this.rotation_rate * 2;
}

Control.prototype.handleMouseDown = function(x, y, position)
{
  window.location.href = this.url;
}
