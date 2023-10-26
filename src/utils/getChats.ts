

export async function getChats() {
    return {
        participants: [ '456', '123' ],
        messages: [
          {
            sender: '456',
            content: 'Lorimer Test',
            timestamp: 1698280741520
          },
          {
            sender: '123',
            content: 'Lorimer Lol',
            timestamp: 1698280741520
          },
          {
            sender: '456',
            content: 'Lorimer Test',
            timestamp: 1698280741520
          },
          {
            sender: '456',
            content: 'Lorimer Test',
            timestamp: 1698280741520
          }
        ]
      };
}