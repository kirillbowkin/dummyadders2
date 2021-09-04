import { makeAutoObservable } from "mobx";

class EightBitAdder {
  constructor() {
    makeAutoObservable(this);
  }

  A = [0, 0, 0, 0, 0, 0, 0, 0];
  B = [0, 0, 0, 0, 0, 0, 0, 0];
  C = [0, 0, 0, 0, 0, 0, 0, 0];
  S = [0, 0, 0, 0, 0, 0, 0, 0, 0];

  setA(idx, val) {
    if (idx >= 0 && idx < this.A.length) {
      // it is in array
      this.A[idx] = val;
    }
  }

  setB(idx, val) {
    if (idx >= 0 && idx < this.B.length) {
      // it is in array
      this.B[idx] = val;
    }
  }

  setC(idx, val) {
    if (idx >= 0 && idx < this.C.length) {
      // it is in array
      this.C[idx] = val;
    }
  }

  setS(idx, val) {
    if (idx >= 0 && idx < this.S.length) {
      // it is in array
      this.S[idx] = val;
    }
  }

  halfAdder(a, b) {
    const sum = a ^ b;
    const carry = a && b;

    return [sum, carry];
  }

  fullAdder(cin, a, b) {
    const sum = a ^ b ^ cin;
    const Cout = (a && b) || (a ^ b && cin);

    return [sum, Cout];
  }

  add() {
    let [sum, cout] = this.halfAdder(this.A[0], this.B[0]);
    this.S[0] = sum;
    this.C[0] = cout;

    for (let i = 1; i < this.A.length; i++) {
      [sum, cout] = this.fullAdder(this.C[i - 1], this.A[i], this.B[i]);
      this.S[i] = sum;
      this.C[i] = cout;
    }

    this.S[this.S.length - 1] = this.C[this.C.length - 1];
  }

  reset() {
    this.A = [0, 0, 0, 0, 0, 0, 0, 0];
    this.B = [0, 0, 0, 0, 0, 0, 0, 0];
    this.C = [0, 0, 0, 0, 0, 0, 0, 0];
    this.S = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
}

export default new EightBitAdder();
