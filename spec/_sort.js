describe('mergeSort', () => {
  it('should be a function', () => {
    expect(mergeSort instanceof Function).toBe(true);
  });
  it('should return an array', () => {
    expect(mergeSort([7,5]) instanceof Array).toBe(true);
  });
  it('should sort an array with repeated elements correctly', () => {
    expect(mergeSort([99,1,1,1,2,2,2,7,5])).toEqual([1,1,1,2,2,2,5,7,99]);
  });
  it('should sort an array with descending order correctly', () => {
    expect(mergeSort([99,98,91,7,5,3])).toEqual([3,5,7,91,98,99]);
  });
  it('should sort array with odd length correctly', () => {
    expect(mergeSort([88,1,2,7,5])).toEqual([1,2,5,7,88]);
  });
  it('should sort array with even length correctly', () => {
    expect(mergeSort([99,1,65,68,23,64])).toEqual([1,23,64,65,68,99]);
  });
  it('should sort array with string elements correctly', () => {
    expect(mergeSort(['pegah', 'saba', 'kumiko', 'bill', 'mike'])).toEqual(["bill", "kumiko", "mike", "pegah", "saba"]);
  });
  it('should sort correctly', () => {
    expect(mergeSort([7,5])).toEqual([5, 7]);
  });
});