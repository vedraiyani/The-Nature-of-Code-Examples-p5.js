// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// A static drawing of a Neural Network

function Neuron(x, y) {
  // Neuron has a position
  this.position = createVector(x, y);
  // Neuron has a list of connections
  this.connections = [];

  // Add a Connection
  this.addConnection = function(c) {
    this.connections.push(c);
  }

  // Draw Neuron as a circle
  this.show = function() {
    stroke(0);
    strokeWeight(1);
    fill(0);
    ellipse(this.position.x, this.position.y, 16, 16);

    // Draw all its connections
    for (var i = 0; i < this.connections.length; i++) {
      this.connections[i].display();
    }
  }
}
