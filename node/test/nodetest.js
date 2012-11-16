describe('this is a demo',function(){
    var m;
    beforeEach(function(){
          m=new match();
    })
    it('demo it',function(){
        expect(m.add(1,2,3,4)).toEqual(10);
    })
});

