provider "aws" {
  region = "us-east-1"  # Replace with your desired AWS region
}

resource "aws_instance" "resume_builder_instance" {
  ami           = "ami-0c94855ba95c71c99"  # Replace with your desired Amazon Machine Image (AMI)
  instance_type = "t2.micro"
  key_name      = "my-key-pair"  # Replace with your EC2 key pair name

  security_group_ids = [aws_security_group.resume_builder_sg.id]

  user_data = <<-EOF
    #!/bin/bash
    # Install required dependencies and start the application
    apt-get update -y
    apt-get install -y nodejs npm
    cd /home/ubuntu/resume-builder
    npm install
    npm start
    EOF
}

resource "aws_security_group" "resume_builder_sg" {
  name        = "resume-builder-security-group"
  description = "Resume Builder Security Group"

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
}

output "resume_builder_public_ip" {
  value       = aws_instance.resume_builder_instance.public_ip
  description = "Public IP of the Resume Builder EC2 instance"
}

# This file commits the Resources needed for the application to work
