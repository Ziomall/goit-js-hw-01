function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    console.log("You ordered ${quantity} droids worth ${pricePerDroid} credits!: ${totalPrice} złotych.");
  }