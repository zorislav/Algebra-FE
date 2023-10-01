const maxNumber = require('../script');

const testArray = [1, 4, 5, 89, 43, 2, -1];

test('Get max number', () => {
    expect(maxNumber(testArray)).toBe(89);
});

test('Get number', () => {
    expect(maxNumber(testArray)).not.toBeNaN();
});

test('Mock primjer', () => {

    const myMock = jest.fn((i) => i);

    expect(myMock("Bok")).toBe("Bok");
    expect(myMock).toHaveBeenCalled();
    expect(myMock).toHaveBeenCalledTimes(1);
    expect(myMock).toHaveBeenCalledWith("Bok");
} );