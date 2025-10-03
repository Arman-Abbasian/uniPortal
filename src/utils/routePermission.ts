interface ReturnType {
  access: boolean
}

export const getRoutePermission = (
  permissions: object,
  path: string
): ReturnType | null => {
  const parts = path.split('/').filter(Boolean)

  let node: any = permissions
  for (const part of parts) {
    node = node?.[part] || node?.children?.[part]
    if (!node) return null
  }

  return node as ReturnType
}
