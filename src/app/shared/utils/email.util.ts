export function generateWelcomeEmail(
  name: string,
  email: string,
  createdAt: Date,
): { subject: string; content: string } {
  const subject = 'Welcome! Your account has been created successfully.';

  const content = `
    Dear ${name},
  
    Congratulations! Your account has been successfully created. Welcome to our community!
  
    Account Details:
    Email: ${email}
    Creation Date: ${createdAt}
  
    From now on, you have access to all the features and functionalities of our system. 
    Feel free to explore and make the most of your experience.
  
    Remember to keep your account credentials safe and secure. 
    If you have any questions or need assistance, don't hesitate to reach out to our support team.
  
    Happy exploring!    
  `;

  return { subject, content };
}
