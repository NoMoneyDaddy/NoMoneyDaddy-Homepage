// Utility for handling external link attributes safely
export function getExternalLinkProps(url?: string) {
  const isDisabled = !url || url === '#'

  return {
    target: isDisabled ? undefined : '_blank',
    rel: isDisabled ? undefined : 'noopener noreferrer nofollow',
  }
}
