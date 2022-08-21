import { render, screen } from '@testing-library/react';
import UserAvatar from "./../../../src/components/widgets/UserAvatar"
describe('User Avatar Component: ', () => {
  const letter = "A"
  const imageUrl = "https://rlv.zcache.com/svc/view?pid=192678685376693620&rvtype=content&max_dim=246"

  
  test('should Show a letter if it was set and imageUrl was not set', () => {
    const {container, getByText} = render( <UserAvatar letter={letter}/> )
    const spanTag = getByText(letter)
    expect(spanTag).toBeTruthy()
    expect(spanTag.innerHTML).toEqual(letter)
  });
  
  test('should not Show a letter if it was set and a imageUrl also was set', () => {
    render( <UserAvatar letter={letter} imageUrl={imageUrl}/> )
    const spanTag = screen.queryByText(letter)
    const imgTag = screen.getByRole('img')
    expect(spanTag).toBeFalsy()
    expect(imgTag).toBeTruthy()
    expect(imgTag.getAttribute('src')).toEqual(imageUrl)
  });

});