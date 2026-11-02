export const productService = {
  async getProducts() {
    // Dummy products list
    const mockProducts = [
      {
        id: '1',
        title: 'Professional Gym Dumbbell Set',
        description: 'High-quality adjustable rubber coated dumbbells for heavy weight training.',
        price: '1499.00',
        currency: 'INR',
        image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500',
      },
      {
        id: '2',
        title: 'Heavy Duty Resistance Bands',
        description: 'Set of 5 elastic workout bands for strength training and physical therapy.',
        price: '499.00',
        currency: 'INR',
        image: 'https://images.unsplash.com/photo-1598289431512-b97b05177046?w=500',
      },
      {
        id: '3',
        title: 'Adjustable Workout Bench',
        description: 'Sturdy steel foldable bench for incline, decline, and flat chest presses.',
        price: '3499.00',
        currency: 'INR',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=500',
      },
      {
        id: '4',
        title: 'Non-Slip Yoga & Gym Mat',
        description: 'Extra thick cushioning mat for floor exercises, stretching, and yoga.',
        price: '799.00',
        currency: 'INR',
        image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500',
      },
    ];

    // Simulate network latency for realistic feel
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockProducts);
      }, 500);
    });
  },
};